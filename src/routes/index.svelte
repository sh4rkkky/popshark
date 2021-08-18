<script type="ts">
    import 'twind/shim'
    import {Howl, Howler} from 'howler';
    import { count } from '../lib/local'
    let antiPress: boolean = false
    let indexImage: number = 0
    let imageurls = [
        "https://media.discordapp.net/attachments/868139590526066748/877387920393244693/0d4ce04981ce3e39.png",
        "https://media.discordapp.net/attachments/868139590526066748/877387610547437588/372b6328cc22e39b.png"
    ]

    let ngum = new Howl({
      src: ['audio/ngumv2.ogg', 'audio/ngumv2.mp3']
    });

    let manut = [
        new Howl({ src: ['audio/manut.mp3'] }),
        new Howl({ src: ['audio/hmahroi.mp3'] }),
        new Howl({ src: ['audio/ngumngum.mp3'] }),
        new Howl({ src: ['audio/sodyod.mp3'] }),
        new Howl({ src: ['audio/welcome.mp3'] }),
    ]
    
    function countUwU() {
        if (antiPress) {
            return
        }
        antiPress = true
        count.update((v) => v + 1 )
        // countuwu++
        if ($count % 100 === 0) {
            const randIndex = ~~(Math.random() * manut.length)
            manut[randIndex].play()
        } else {
            ngum.play()
        }
        // if ($count % 100 === 0) {
        //     manut.play()
        // }
        indexImage = (indexImage + 1) % imageurls.length;
    }

    function antiPressUwU() {
        antiPress = false
        console.log("งั้ม")
    }
</script>

<svelte:head>
    <title>POPSHARK - beta</title>
    <meta name="title" content="POPSHARK"/>
    <meta name="description" content="POPSHARK"/>
    <meta name="keywords" content="popshark, ป็อปชาร์ค, ป็อปฉลาม, กดฉลาม">

    <style> 
        * {
            /* code from stackoverflow */
            user-select: none; /* supported by Chrome and Opera */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
        }
    </style>
</svelte:head>

<svelte:body on:keydown={countUwU} on:keyup={antiPressUwU}></svelte:body>

<main 
 class="w-full h-screen flex flex-col items-center justify bg-transparent" 
 on:mousedown={countUwU} on:mouseup={antiPressUwU}
 >

    {#each imageurls as url, indexuwu}
        <img
            src={url}
            alt="POPSHARK"
            class={`${indexuwu === indexImage ? 'block' : 'hidden'} fixed object-cover w-full h-full -z-10`}
        />
    {/each}

    <h1 class="text-4xl border-black text-white rounded p-2 flex bg-black mt-2">
        POPSHARK
        <span class="text-xs text-red-300 mt-1 ml-1 underline">beta</span>
    </h1>
    <p class="text-2xl border-black text-white rounded p-1 flex bg-black mt-1">
        Count: {$count.toLocaleString()}
    </p>
    <dev class="text-1xl border-black text-white rounded p-1 flex bg-black mt-1">
        <p class="text-white underline">สร้างโดยชาร์ค[น้อนบุ้ง]</p>
    </dev>
</main>