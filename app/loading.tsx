function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div 
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" 
        role="status" 
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
