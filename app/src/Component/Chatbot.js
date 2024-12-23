import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const responses = {
    "where is my product":
      "Please provide your order ID to track your product.",
    "how can i return my product":
      "You can return the product within 30 days of delivery.",
    "how do i track my order":
      "You can track your order by visiting the 'Track Order' section in your account.",
    "how do i get a refund":
      "Refunds are processed after the product is returned and verified.",
    "can i cancel my order":
      "Orders can be canceled before shipment. Please contact support for assistance.",
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = input.trim().toLowerCase();

      const botMessage =
        responses[userMessage] ||
        "Sorry, I didn't understand that. Can you please rephrase?";

      setMessages((prevMessages) => [
        ...prevMessages,
        { user: input.trim(), bot: botMessage },
      ]);

      setInput("");
    }
  };

  const handleResetChat = () => {
    setMessages([]);
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
    setTimeout(handleSendMessage, 100);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-lg mx-auto p-4 mt-14">
      <div className="bg-blue-600 text-white text-center py-2 rounded-lg mb-4 w-full">
        <h2 className="text-lg font-semibold">Chat with Support</h2>
      </div>

      <div className="flex-grow overflow-y-auto mb-4 w-full max-h-72 space-y-4 p-2 bg-gray-100 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start">
            <div
              className={`w-6 h-6 rounded-full ${
                msg.user ? "bg-gray-300" : "bg-green-500"
              }`}
            ></div>
            <p
              className={`ml-3 text-sm ${
                msg.user ? "text-gray-700" : "text-green-600"
              } font-medium`}
            >
              {msg.user ? "You" : "Bot"}: {msg.user || msg.bot}
            </p>
          </div>
        ))}
      </div>

      <div className="space-x-2 mb-4 w-full">
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          onClick={() => handleQuickReply("where is my product")}
        >
          Track my order
        </button>
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          onClick={() => handleQuickReply("how can i return my product")}
        >
          Return product
        </button>
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          onClick={() => handleQuickReply("how do i get a refund")}
        >
          Get a refund
        </button>
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          onClick={() => handleQuickReply("can i cancel my order")}
        >
          Cancel order
        </button>
      </div>

      <div className="flex items-center w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask me anything..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>

      <div className="text-center mt-4 w-full">
        <button
          onClick={handleResetChat}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Reset Chat
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
