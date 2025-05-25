import WalletConnect from '../components/WalletConnect';
import SocialFeed from '../components/SocialFeed';

export default function SocialFeedPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow">
        <WalletConnect />
      </nav>
      <SocialFeed />
    </div>
  );
}
