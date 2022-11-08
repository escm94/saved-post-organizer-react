const FoldersHeader = () => {
  return (
    <div className="mt-6 border-b border-gray-200 pb-5">
      <h2 className="text-lg font-medium leading-6 text-gray-900">Folders</h2>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        All of the posts you currently have saved on your Reddit account will be
        listed below, automatically sorted by subreddit. Click the Sync button
        above to get the latest saved posts from your Reddit account.
      </p>
    </div>
  );
};

export default FoldersHeader;
