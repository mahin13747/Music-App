// import React, { useState } from 'react';
// import { songs } from './data/songs';
// import AudioPlayer from './components/AudioPlayer';
// import Playlist from './components/Playlist';

// export default function App() {
//   const [currentSong, setCurrentSong] = useState(songs[0]);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleNext = () => {
//     const currentIndex = songs.findIndex(song => song.id === currentSong.id);
//     const nextIndex = (currentIndex + 1) % songs.length;
//     setCurrentSong(songs[nextIndex]);
//   };

//   const handlePrev = () => {
//     const currentIndex = songs.findIndex(song => song.id === currentSong.id);
//     const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
//     setCurrentSong(songs[prevIndex]);
//   };

//   const handleSongSelect = (song) => {
//     setCurrentSong(song);
//     setIsPlaying(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Now Playing Section */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Now Playing</h1>
//           <div className="w-48 h-48 mx-auto rounded-lg overflow-hidden shadow-xl mb-6">
//             <img 
//               src={currentSong.cover} 
//               alt={currentSong.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h2 className="text-2xl font-semibold text-gray-800">{currentSong.title}</h2>
//           <p className="text-gray-600">{currentSong.artist}</p>
//         </div>

//         {/* Audio Player */}
//         <AudioPlayer
//           currentSong={currentSong}
//           songs={songs}
//           onNext={handleNext}
//           onPrev={handlePrev}
//           isPlaying={isPlaying}
//           setIsPlaying={setIsPlaying}
//         />

//         {/* Playlist */}
//         <Playlist
//           songs={songs}
//           currentSong={currentSong}
//           onSongSelect={handleSongSelect}
//         />
//       </div>
//     </div>
//   );
// }