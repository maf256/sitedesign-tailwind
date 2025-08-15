export default function Loading() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="text-center space-y-4">
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-secondary rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <p className="font-old-standard text-lg text-content/80">
            Loading...
          </p>
          <p className="font-old-standard text-sm text-content/80">
            Please wait while we prepare the content
          </p>
        </div>
      </div>
    </div>
  );
}