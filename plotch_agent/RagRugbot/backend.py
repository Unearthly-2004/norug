from flask import Flask, request, jsonify
from groclake.vectorlake import VectorLake
from groclake.datalake import DataLake
from groclake.modellake import ModelLake
from functools import wraps
import logging
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Direct API credentials
API_KEY = "your-api-key-here"  # Replace with your actual API key, for security and usage reason i have restricted the use of api here
ACCOUNT_ID = "your-account-id-here"  # Replace with your actual account ID

class RugPullDetector:
    def __init__(self):
        # Initialize components with direct API keys
        self.vectorlake = VectorLake()
        self.vectorlake.api_key = API_KEY
        self.vectorlake.account_id = ACCOUNT_ID
        
        self.datalake = DataLake()
        self.datalake.api_key = API_KEY
        self.datalake.account_id = ACCOUNT_ID
        
        self.modellake = ModelLake()
        self.modellake.api_key = API_KEY
        self.modellake.account_id = ACCOUNT_ID
        
        self.datalake_id = None
        self.vectorlake_id = None
        self._initialize_lakes()
    
    def _initialize_lakes(self) -> None:
        """Initialize storage components."""
        try:
            datalake_response = self.datalake.create()
            self.datalake_id = datalake_response.get("datalake_id")
            
            vector_response = self.vectorlake.create()
            self.vectorlake_id = vector_response.get("vectorlake_id")
                
        except Exception as e:
            logger.error(f"Failed to initialize: {str(e)}")
            raise
    
    def process_document(self, file_path: str) -> dict:
        """Process PDF documentation for analysis."""
        try:
            # Push PDF to DataLake
            with open(file_path, 'rb') as file:
                push_response = self.datalake.push({
                    "datalake_id": self.datalake_id,
                    "document_type": "pdf",
                    "document_data": file.read()
                })
            
            document_id = push_response.get("document_id")
            if not document_id:
                raise ValueError("Failed to process PDF")
            
            # Fetch document chunks
            chunks = self.datalake.fetch({
                "document_id": document_id,
                "datalake_id": self.datalake_id,
                "fetch_format": "chunk",
                "chunk_size": "500"
            }).get("document_data", [])
            
            # Process chunks
            for chunk in chunks:
                vector = self.vectorlake.generate(chunk).get("vector")
                self.vectorlake.push({
                    "vector": vector,
                    "vectorlake_id": self.vectorlake_id,
                    "document_text": chunk,
                    "vector_type": "text",
                    "metadata": {"source": file_path}
                })
            
            return {"status": "success", "chunks_processed": len(chunks)}
            
        except Exception as e:
            logger.error(f"Document processing failed: {str(e)}")
            raise
    
    def analyze_project(self, query: str) -> dict:
        """Perform 3-step rug pull analysis."""
        try:
            # Get relevant context
            search_vector = self.vectorlake.generate(query).get("vector")
            search_results = self.vectorlake.search({
                "vector": search_vector,
                "vectorlake_id": self.vectorlake_id,
                "vector_type": "text",
                "top_k": 5
            }).get("results", [])
            
            context = " ".join([r.get("vector_document", "") for r in search_results])
            
            # Run 3-step analysis
            response = self.modellake.chat_complete({
                "messages": [
                    {
                        "role": "system",
                        "content": """You are a crypto security analyst. Analyze projects in 3 steps:
                        
                        STEP 1 - SMART CONTRACT ANALYSIS:
                        - Check for mint functions
                        - Verify ownership renouncement
                        - Look for backdoors/hidden functions
                        
                        STEP 2 - LIQUIDITY VERIFICATION:
                        - Check liquidity lock status
                        - Verify lock duration
                        - Analyze token distribution
                        
                        STEP 3 - TEAM VALIDATION:
                        - Check team doxxing status
                        - Verify past projects
                        - Review social presence
                        
                        For each step, provide a SAFE/CAUTION/DANGER rating and specific findings."""
                    },
                    {
                        "role": "user",
                        "content": f"Context from documentation:\n{context}\n\nAnalyze this project: {query}"
                    }
                ]
            })
            
            return {
                "analysis": response.get("answer"),
                "context_used": bool(context)
            }
            
        except Exception as e:
            logger.error(f"Analysis failed: {str(e)}")
            raise

def validate_api_key(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        api_key = request.headers.get('X-API-Key')
        if api_key != API_KEY:
            return jsonify({"error": "Invalid API key"}), 401
        return f(*args, **kwargs)
    return decorated_function

# Initialize detector
detector = RugPullDetector()

# PDF file path
PDF_PATH = r"E:\hackverse5.0\site\updated_wihtout_node\plotch_agent\RagRugbot\Crypto_NFT_Project_Analysis_Template_Simple.pdf"

# Load initial document
try:
    if os.path.exists(PDF_PATH):
        detector.process_document(PDF_PATH)
        logger.info(f"Loaded document: {os.path.basename(PDF_PATH)}")
    else:
        logger.warning(f"PDF file not found: {PDF_PATH}")
except Exception as e:
    logger.error(f"Failed to load document: {str(e)}")

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@app.route('/analyze', methods=['POST'])
@validate_api_key
def analyze():
    try:
        data = request.get_json()
        if not data or 'query' not in data:
            return jsonify({"error": "Query is required"}), 400
        
        query = data['query']
        result = detector.analyze_project(query)
        return jsonify(result), 200
    
    except Exception as e:
        logger.error(f"Analysis endpoint error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(500)
def internal_error(e):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000, debug=False)
    except Exception as e:
        logger.error(f"Failed to start server: {str(e)}")



