const AIAssistant = () => {
    return (
      <div className="max-w-full h-screen p-4 md:p-6 bg-[#FEFCE8] dark:bg-gray-800 dark:text-white shadow-lg transition-all flex flex-col">
       
  
        <iframe
          src="https://medical-report-analyser-fdgmlxyxdxjqs6z2chvgz4.streamlit.app/?embed=true"
          style={{ height: "100%", width: "100%", border: "none" }}
        ></iframe>
       
       
      </div>
    );
  };
  
  export default AIAssistant;