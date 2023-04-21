import { useState, useEffect } from "react";

function RouteNavigationButtons() {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const handleHistoryChange = () => {
      setCanGoBack(window.history.length > 1);
      setCanGoForward(
        window.history.state !== null && window.history.state !== undefined
      );
    };
    window.addEventListener("popstate", handleHistoryChange);
    return () => {
      window.removeEventListener("popstate", handleHistoryChange);
    };
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  return (
    <div className="pr-8 pt-1">
      <button
        className={!canGoBack ? "disabled:opacity-20" : ""}
        onClick={handleBack}
        disabled={!canGoBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className={!canGoForward ? "disabled:opacity-20" : ""}
        onClick={handleForward}
        disabled={!canGoForward}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
export default RouteNavigationButtons;
