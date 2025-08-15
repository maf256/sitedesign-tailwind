'use client';

import { Component } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for error state
      return (
        <div className="min-h-screen bg-base flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center space-y-6">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h1 className="font-old-standard text-2xl font-bold text-content">
                Something went wrong
              </h1>
              <p className="text-content/70 font-old-standard">
                We encountered an unexpected error. Please try refreshing the page or return to the homepage.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all duration-200 font-medium"
              >
                <RefreshCw size={18} />
                Refresh Page
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-200 font-medium"
              >
                <Home size={18} />
                Go Home
              </Link>
            </div>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-content/80 hover:text-content">
                  Error Details (Development Only)
                </summary>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <pre className="text-xs text-red-800 whitespace-pre-wrap overflow-auto">
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;