import React, { useState, useEffect } from 'react';

const InstallAlert = () => {
  // State to control alert visibility
  const [showAlert, setShowAlert] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Check if app should show install prompt
//   useEffect(() => {
//     // Check if user has already dismissed the alert or installed the app
//     const hasSeenInstallPrompt = localStorage.getItem('defakeit-install-dismissed');
//     const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
//     const isInWebAppiOS = window.navigator.standalone === true;
    
//     // Show alert if user hasn't seen it and app isn't installed
//     if (!hasSeenInstallPrompt && !isStandalone && !isInWebAppiOS) {
//       // Delay showing the alert for better UX
//       setTimeout(() => {
//         setShowAlert(true);
//       }, 3000); // Show after 3 seconds
//     }
//   }, []);
useEffect(() => {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isInWebAppiOS = window.navigator.standalone === true;

  // Only show if mobile and not installed
  if (isMobile && !isStandalone && !isInWebAppiOS) {
    setTimeout(() => {
      setShowAlert(true);
    }, 3000); // show after 3 sec
  }
}, []);



//   // Handle closing the alert
//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setShowAlert(false);
//       localStorage.setItem('defakeit-install-dismissed', 'true');
//     }, 300);
//   };
const handleClose = () => {
  setIsClosing(true);
  setTimeout(() => {
    setShowAlert(false);
    // No longer store 'dismissed' flag
    // localStorage.setItem('defakeit-install-dismissed', 'true');
  }, 300);
};


  // Handle "Install Now" button click
  const handleInstallClick = () => {
    // Close the alert
    handleClose();
    
    // Show browser-specific instructions or trigger PWA install
    if ('serviceWorker' in navigator) {
      // Additional PWA logic can be added here
      console.log('Install prompt triggered for DeFakeIt');
    }
  };

  // Don't render if alert shouldn't be shown
  if (!showAlert) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Alert Box */}
      <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 transition-all duration-300 ${
        isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
          
          {/* App Icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce" style={{animationDuration: '2s'}}>
              <i className="fas fa-brain text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Install DeFakeIt
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Get instant access to AI deepfake detection
            </p>
          </div>
          
          {/* Installation Steps */}
          <div className="space-y-4 mb-8">
            <div className="text-center mb-6">
              <p className="text-white font-semibold mb-4">
                Install DeFakeIt for the best experience!
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Add our app to your home screen for quick access and offline capabilities.
              </p>
            </div>
            
            {/* Step-by-step instructions */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Tap the menu button</p>
                  <p className="text-gray-400 text-xs">Look for three dots (⋮) or share icon</p>
                </div>
                <div className="text-2xl text-gray-400">
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Select "Add to Home Screen"</p>
                  <p className="text-gray-400 text-xs">Or "Install App" option</p>
                </div>
                <div className="text-2xl text-gray-400">
                  <i className="fas fa-plus-square"></i>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Tap "Install" or "Add"</p>
                  <p className="text-gray-400 text-xs">Confirm installation</p>
                </div>
                <div className="text-2xl text-green-400">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleInstallClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <i className="fas fa-download group-hover:animate-bounce"></i>
              <span>Got It, Let's Install!</span>
            </button>
            
            <button 
              onClick={handleClose}
              className="w-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              Maybe Later
            </button>
          </div>
          
          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-green-400 text-lg mb-1">
                  <i className="fas fa-bolt"></i>
                </div>
                <p className="text-xs text-gray-400">Faster Access</p>
              </div>
              {/* <div>
                <div className="text-blue-400 text-lg mb-1">
                  <i className="fas fa-wifi"></i>
                </div>
                <p className="text-xs text-gray-400">Works Offline</p>
              </div> */}
              <div>
                <div className="text-purple-400 text-lg mb-1">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <p className="text-xs text-gray-400">Native Feel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallAlert;