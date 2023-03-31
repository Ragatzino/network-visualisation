import { useEffect, useState } from "react";

const useAutocomplete = (
  data: string[],
  inputSearchRef: HTMLInputElement | null,
  setSelected:(arg:string) => void
) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [suggestions, setSuggestions] = useState <string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  useEffect(() => {
    if (inputSearchRef) {
      inputSearchRef.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value !== "") {
      const filteredSuggestions = data.filter((itemData) => {
        const value = event.target.value.toUpperCase();
        const name = itemData.toUpperCase();
        return value && name.startsWith(value) && name !== value;
      });
      setSearchedValue(event.target.value);
      setSuggestions(filteredSuggestions);
    } else {
      setSearchedValue("");
      setSuggestions([]);
      setSelectedSuggestion("");
      setActiveSuggestion(0);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "ArrowDown" && activeSuggestion < suggestions.length) {
      setActiveSuggestion(activeSuggestion + 1);
    } else if (event.key === "ArrowUp" && activeSuggestion > 1) {
      setActiveSuggestion(activeSuggestion - 1);
    } else if (event.key === "Enter") {
      setSelected(suggestions[activeSuggestion - 1])
      setSearchedValue(suggestions[activeSuggestion - 1]);
      setSelectedSuggestion(suggestions[activeSuggestion - 1]);
      setSuggestions([]);
      setActiveSuggestion(0);
    }
  };

  const handleClick = (value: string) => {
    setSelected(value)
    setSearchedValue(value);
    setSuggestions([]);
    setSelectedSuggestion(value);
    setActiveSuggestion(0);
    //do something else
  };

  return {
    searchedValue,
    suggestions,
    selectedSuggestion,
    activeSuggestion,
    handleChange,
    handleKeyDown,
    handleClick,
  };
};

export default useAutocomplete;