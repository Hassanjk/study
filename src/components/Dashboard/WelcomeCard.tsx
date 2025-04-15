import { BsEmojiSmile } from 'react-icons/bs';

const WelcomeCard = () => {
  return (
    <div className="card-base bg-green-100">
      <h6 className="flex items-center gap-2 mb-1">
        <BsEmojiSmile /> Welcome back, <span>User</span>!
      </h6>
      <p className="text-gray-600 mb-2">
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
      </p>
      <button className="px-4 py-1 text-sm border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
        Start Studying
      </button>
    </div>
  );
};

export default WelcomeCard;