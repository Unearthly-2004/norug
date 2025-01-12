import streamlit as st
import requests
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class RugPullDetectorUI:
    def __init__(self):
        self.ANALYZE_URL = "http://127.0.0.1:5000/analyze"
        
        if 'analysis_history' not in st.session_state:
            st.session_state.analysis_history = []
    
    def analyze_project(self, query: str) -> dict:
        """Send a project for rug pull analysis."""
        try:
            response = requests.post(
                self.ANALYZE_URL,
                json={"query": query},
                timeout=30
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f"Analysis failed: {str(e)}")
            raise
    
    def render(self):
        """Main UI render."""
        st.title("🚨 3-Step Rug Pull Detector")
        
        # Instructions
        st.markdown("""
        ### How to Use:
        1. Add your PDF documents to the `project_docs` folder:
           - Project whitepaper
           - Smart contract audit reports
           - Team documentation
           - Tokenomics details
        
        2. The system will automatically load and process these documents
        
        3. Enter project details below for analysis
        """)
        
        # Analysis form
        with st.form("analysis_form"):
            query = st.text_area(
                "Enter project details to analyze:",
                height=150,
                placeholder="Enter project name, contract address, and any specific concerns..."
            )
            submitted = st.form_submit_button("Analyze Project")
            
            if submitted and query:
                try:
                    response = self.analyze_project(query)
                    analysis = response.get("analysis", "Analysis failed")
                    
                    # Show if using loaded documentation
                    if response.get("context_used"):
                        st.info("✅ Analysis includes data from loaded documentation")
                    else:
                        st.warning("⚠️ No matching documentation found - analysis based on provided info only")
                    
                    # Display results
                    st.subheader("3-Step Analysis Results")
                    st.write(analysis)
                    
                    # Add to history
                    st.session_state.analysis_history.append({
                        "query": query,
                        "result": analysis
                    })
                    
                except Exception as e:
                    st.error(f"❌ Analysis failed: {str(e)}")
        
        # Show history
        if st.session_state.analysis_history:
            st.subheader("Previous Analyses")
            for analysis in st.session_state.analysis_history:
                with st.expander(f"Analysis: {analysis['query'][:50]}..."):
                    st.text("Query:")
                    st.code(analysis['query'])
                    st.text("Results:")
                    st.write(analysis['result'])

if __name__ == "__main__":
    ui = RugPullDetectorUI()
    ui.render()