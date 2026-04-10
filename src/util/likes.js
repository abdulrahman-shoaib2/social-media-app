export default function ToggleSelectedEmoji(
    emoji,
    text,
    style,
    selectedEmoji,
    setSelectedEmoji,
    toggle = false,
  ) {
    const objectCopy = {
      emoji: false,
      text: false,
      style: false,
    };
    if (selectedEmoji.text == text) {
      objectCopy.emoji = false;
      objectCopy.text = false;
      objectCopy.style = false;
      setSelectedEmoji(objectCopy);
    } else {
      if (toggle && selectedEmoji.emoji != false) {
        objectCopy.emoji = false;
        objectCopy.text = false;
        objectCopy.style = false;
        setSelectedEmoji(objectCopy);
        return;
      }
      objectCopy.emoji = emoji;
      objectCopy.text = text;
      objectCopy.style = style;
      setSelectedEmoji(objectCopy);
    }
  }
