import React, { useState } from "react";

interface QuizSearchProps {
  onSearch: (searchTerm: string) => void;
}

const QuizSearch: React.FC<QuizSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search quizzes"
      value={searchTerm}
      onChange={handleChange}
      className="mb-4 p-2 border border-gray-300 rounded"
    />
  );
};

export default QuizSearch;
