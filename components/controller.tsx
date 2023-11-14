"use client";
import { Musics } from "@/app/music";
import { useEffect, useRef, useState } from "react";
import PlayIcon from "./icon/play";
import PauseIcon from "./icon/pause";
import FiveSecondPrev from "./icon/5s-prev";
import FiveSecondNext from "./icon/5s-next";
import NextSong from "./icon/next-song";
import PrevSong from "./icon/prev-song";
import LoopIcon from "./icon/loop";
import ShuffleIcon from "./icon/shuffle";
import { NowPlaying } from "@/functions/console-log";

export default function Controller({ songs }: { songs: Array<Musics> }) {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const [IDinterval, setIDInterval] = useState<any>(null);

  const [crrIndexSong, setCrrIndexSong] = useState<number>(0);
  const [crrTime, setCrrTime] = useState<number>(0);

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);

  const trackRef = useRef<null | HTMLDivElement>(null);
  const thumbRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setAudio(new Audio(songs[0].url));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.src = songs[crrIndexSong].url;
      audio.load();
      handlePlaySong();
    }
  }, [crrIndexSong]);

  useEffect(() => {
    if (audio) {
      audio.currentTime = crrTime;
    }
  }, [crrTime]);

  useEffect(() => {
    if (audio) {
      audio.onended = () => {
        handlePauseSong();
        if (isRepeat && audio) {
          audio.currentTime = 0;
          handlePlaySong();
        } else {
          handleGoToNextSong();
        }
      };
    }
  });

  const handlePlaySong = () => {
    if (audio) {
      audio.play();
      setIsPlay(true);
      NowPlaying(songs[crrIndexSong].name);
      const interval = setInterval(() => {
        if (trackRef.current && thumbRef.current) {
          thumbRef.current.style.right = `${100 - (audio.currentTime / audio.duration) * 100}%`;
        }
      }, 100);
      setIDInterval(interval);
    }
  };

  const handlePauseSong = () => {
    if (audio) {
      audio.pause();
      setIsPlay(false);
      clearInterval(IDinterval);
    }
  };

  const handleGoTo5SPrev = () => {
    setCrrTime((prev) => prev - 5);
  };

  const handleGoTo5SNext = () => {
    setCrrTime((next) => next + 5);
  };

  const handleGoToPrevSong = () => {
    if (crrIndexSong > 0) {
      setCrrIndexSong((prev) => prev - 1);
    } else if (crrIndexSong === 0) {
      setCrrIndexSong(songs.length - 1);
    }
  };

  const handleGoToNextSong = () => {
    if (crrIndexSong < songs.length - 1) {
      setCrrIndexSong((prev) => prev + 1);
    } else if (crrIndexSong === songs.length - 1) {
      setCrrIndexSong(0);
    }
  };

  const handleChangeProgress = (e: any) => {
    if (audio && trackRef.current && thumbRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const percent = Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) / 100;
      thumbRef.current.style.right = `${100 - percent}%`;
      audio.currentTime = (percent * audio.duration) / 100;
      const newTime = Math.round(audio.currentTime);
      setCrrTime(newTime);
    }
  };

  return (
    <div className="fixed flex items-center border-t-[1px] border-slate-100 bottom-0 left-0 h-16 w-full bg-card-music z-10">
      <div></div>
      <div className="flex flex-col gap-2 items-center flex-1">
        <div className="flex items-center gap-2">
          <ShuffleIcon onClick={() => setIsShuffle(!isShuffle)} className="cursor-pointer" data-shuffle={isShuffle} />
          <PrevSong onClick={handleGoToPrevSong} />
          <FiveSecondPrev onClick={handleGoTo5SPrev} />
          <PlayIcon onClick={handlePlaySong} className={`${!isPlay ? "block" : "hidden"}`} />
          <PauseIcon onClick={handlePauseSong} className={`${isPlay ? "block" : "hidden"}`} />
          <FiveSecondNext onClick={handleGoTo5SNext} />
          <NextSong onClick={handleGoToNextSong} />
          <LoopIcon onClick={() => setIsRepeat(!isRepeat)} data-repeat={isRepeat} />
        </div>
        <div onClick={handleChangeProgress} ref={trackRef} className="relative h-1 w-96 rounded-full bg-zinc-700">
          <div
            ref={thumbRef}
            className="absolute transition-all rounded-full top-0 left-0 h-full bg-white hover:after:absolute hover:after:-bottom-1 hover:bg-emerald-300 hover:after:right-0 hover:after:h-3 hover:after:w-3 hover:after:rounded-full hover:after:bg-white "
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
