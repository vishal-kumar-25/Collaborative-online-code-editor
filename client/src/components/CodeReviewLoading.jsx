import { useState, useEffect } from 'react';

const CodeReviewLoading = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Analyzing code structure...');

  // Simulate the loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Update status text based on progress
  useEffect(() => {
    if (progress < 25) {
      setStatusText('Analyzing code structure...');
    } else if (progress < 50) {
      setStatusText('Checking for best practices...');
    } else if (progress < 75) {
      setStatusText('Reviewing algorithm efficiency...');
    } else if (progress < 90) {
      setStatusText('Generating optimization suggestions...');
    } else {
      setStatusText('Finalizing code review...');
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center h-full justify-center p-8 rounded-lg shadow-md">
      <div className="w-full max-w-md">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-300 mb-4">AI Code Review in Progress</h3>
        
        {/* Code brain animation */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M12 17.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 4.5 12 4.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
                  stroke="#3b82f6" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M8 12h8M12 16V8" 
                  stroke="#3b82f6" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div 
              className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
            />
            <div 
              className="absolute inset-3 border-4 border-blue-300 rounded-full border-b-transparent animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
            />
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Status text */}
        <div className="flex justify-between text-sm text-gray-300 mb-6">
          <span>{statusText}</span>
          <span>{progress}%</span>
        </div>
        
        {/* Pulsing code lines animation - fixing the delay issue */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-3 bg-gray-300 rounded w-8 animate-pulse" />
            <div className="h-3 bg-gray-300 rounded w-full animate-pulse" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 bg-gray-300 rounded w-8 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="h-3 bg-gray-300 rounded w-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 bg-gray-300 rounded w-8 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="h-3 bg-gray-300 rounded w-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeReviewLoading;