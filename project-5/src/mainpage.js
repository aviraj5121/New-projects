import React ,{useState} from 'react'
function mainpage() {
    const [url, setUrl] = useState('') 
    const [size, setSize] = useState('') 
    const [shape, setShape] = useState('')
    const handleChangeurl = (event) =>{
        event.persist();
        setUrl(event.target.value)
        console.log(url)
    }
    const handleChangesize = (event) =>{
        event.persist();
        setSize(event.target.value)
        console.log(size)
    }
    const handleChangesShape = (event) =>{
        event.persist();
        setShape(event.target.value)
        console.log(size)
    }
    const handleOnSubmit = async(event) =>{
        event.preventDefault()
        const url = 'https://neutrinoapi-qr-code.p.rapidapi.com/qr-code';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '693dc4b1a0mshe9e08ea98cbd6f6p12e389jsn887f1d89737c',
                'X-RapidAPI-Host': 'neutrinoapi-qr-code.p.rapidapi.com'
            },
            body: new URLSearchParams({
                content: url,
                width: size,
                height: size,
                'fg-color': '#000000',
                'bg-color': '#ffffff'
            })
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.blob();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        console.log(size)
        console.log(url)
        console.log(shape)
    }

  return (

    <div className='box-1'>
        <form onSubmit={handleOnSubmit}>
        <input type='url' value={url} onChange={handleChangeurl} />
        <input type='text' value={size} onChange={handleChangesize} />
        <label for="shape" >Choose a shape:</label>
        <select id="shape" name="shape" value={shape} onChange={handleChangesShape} >
            <option value="square">Square</option>
            <option value="mosaic">mosaic</option>
            <option value="dot">dot</option>
            <option value="circle"> circle</option>
            <option value="circle-zebra">Circle-zebra</option>
            <option value="circle-zebra-vertical">Circle-zebra-vertical</option>
            <option value="dot">Dot</option>
            <option value="diamond">Diamond</option>
            <option value="star">Star</option>
            <option value="rounded-pointed">rounded-pointed</option>
            <option value="rounded-in-smooth">rounded-in-smooth</option>
            <option value="rounded-in">rounded-in</option>
            <option value="japnese"> japnese</option>
            <option value="leaf">leaf</option>
            <option value="pointed">pointed</option>
            <option value="pointed-edge-cut">pointed-edge-cut   </option>
        </select>
        <label for="frame">Choose a frame:</label>
        <select id="frame" name="frame">
            <option value="frame0">Frame1</option>
            <option value="frame1">Frame2</option>
            <option value="frame2">Frame3</option>
            <option value="frame3">Frame4</option>
            <option value="frame4">Frame5</option>
            <option value="frame5">Frame6</option>
            <option value="frame6">Frame7</option>
            <option value="frame7">Frame8</option>
            <option value="frame8">Frame9</option>
            <option value="frame9">Frame10</option>
            <option value="frame10">Frame11</option>
            <option value="frame11">Frame12</option>
            <option value="frame12">Frame13</option>
            <option value="frame13">Frame13</option>
            <option value="frame14">Frame14</option>
            <option value="frame16">Frame15</option>
        </select>
        <label for="frame">Choose a shape of eyeball:</label>
        <select id="frame" name="frame">
            <option value="ball0">ball 0</option>
            <option value="ball1">ball 1</option>
            <option value="ball2">ball 2</option>
            <option value="ball3">ball 3</option>
            <option value="ball4">ball 4</option>
            <option value="ball5">ball 5</option>
            <option value="ball6">ball 6</option>
            <option value="ball7">ball 7</option>
            <option value="ball8">ball 8</option>
            <option value="ball9">ball 9</option>
            <option value="ball10">ball 10</option>
            <option value="ball11">ball 11</option>
            <option value="ball12">ball 12</option>
            <option value="ball13">ball 13</option>
            <option value="ball14">ball 14</option>
            <option value="ball15">ball 15</option>
            <option value="ball16">ball 16</option>
            <option value="ball17">ball 17</option>
            <option value="ball18">ball 18</option>
            <option value="ball19">ball 19</option>
        </select>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default mainpage
