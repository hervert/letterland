const alphabetColors = {
  'A': 'bg-red-400', 'B': 'bg-blue-400', 'C': 'bg-green-400', 'D': 'bg-yellow-400',
  'E': 'bg-purple-400', 'F': 'bg-pink-400', 'G': 'bg-indigo-400', 'H': 'bg-orange-400',
  'I': 'bg-teal-400', 'J': 'bg-cyan-400', 'K': 'bg-lime-400', 'L': 'bg-emerald-400',
  'M': 'bg-sky-400', 'N': 'bg-violet-400', 'O': 'bg-fuchsia-400', 'P': 'bg-rose-400',
  'Q': 'bg-amber-400', 'R': 'bg-red-500', 'S': 'bg-blue-500', 'T': 'bg-green-500',
  'U': 'bg-yellow-500', 'V': 'bg-purple-500', 'W': 'bg-pink-500', 'X': 'bg-indigo-500',
  'Y': 'bg-orange-500', 'Z': 'bg-teal-500'
};

const digitColors = {
  '0': 'bg-red-300', '1': 'bg-blue-300', '2': 'bg-green-300', '3': 'bg-yellow-300',
  '4': 'bg-purple-300', '5': 'bg-pink-300', '6': 'bg-indigo-300', '7': 'bg-orange-300',
  '8': 'bg-teal-300', '9': 'bg-cyan-300'
};

export const getColorForChar = (char) => {
  if (char >= 'A' && char <= 'Z') {
    return alphabetColors[char];
  } else if (char >= '0' && char <= '9') {
    return digitColors[char];
  }
  return 'bg-gray-400'; // Default color if character is not found
};