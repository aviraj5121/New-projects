import React from 'react'
import { useEffect,useRef,useState } from 'react'
import './videoplayer.css'
const Videoplayer = ({src}) => {
    const videoref = useRef(null)
    const [currentTime, setCurrenttime] = useState(0)
    const [duration, setDuration] = useState(0)
    const  playvideo = () =>{
        videoref.current.play();
    }
    const  pausevideo = () =>{
        videoref.current.pause();
    }
    const  fastforwardvideo = () =>{
        videoref.current.currentTime +=10;
    }
    const  rewindvideo = () =>{
        videoref.current.currentTime -=10;
    }
    useEffect(()=>{
        const video = videoref.current;
        const timeUpdate=()=>{
            setCurrenttime(video.currentTime)
        };
        const load_meta_data=()=>{
            setDuration(video.duration)
        };
        video.addEventListener('timeupdate',setCurrenttime)
        video.addEventListener('loadedmetadata',load_meta_data)
    },[])
    return (
    
    <div className='video-container'>
        <video className='video-player' ref={videoref} src={src}/>
        <div className='controls'>
            <button className='control-button'onClick={playvideo}>Play</button>
            <button className='control-button'onClick={pausevideo}>Pause</button>
            <button className='control-button'onClick={fastforwardvideo}>Fast Forward</button>
            <button className='control-button'onClick={rewindvideo}>Rewind</button>
        </div>
        <div className='progress-bar-container'>
            <div className='progress-bar'>
                <div className='progress-bar-fill' style={{width:`${(currentTime/duration)*100}%`}}>
                </div>
                <div className='time-indicator'>
                        <span className='current-time'>
                            {currentTime.toFixed(2)}
                        </span>
                        
                        <span className='duration'>
                            {duration.toFixed(2)}
                        </span>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Videoplayer
