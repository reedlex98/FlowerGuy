        const audios = []
        function playSound(e) {
            const currentAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
            if (!currentAudio) return
            
            if (audios.indexOf(currentAudio) < 0) audios.push(currentAudio)
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
            audios.forEach(audio => {
                if (audio.getAttribute('data-key') != e.keyCode) {
                    stopNow(audio)
                }
                else {
                    audio.currentTime = 0
                    audio.volume = 0.3
                    audio.play()
                }
            })
            key.classList.add('playing')
        }

        function stopNow(audio) {
            audio.pause()
            audio.currentTime = 0
        }

        function removeTransition(e) {
            if (e.propertyName !== 'transform') return
            this.classList.remove('playing')
        }

        const keys = document.querySelectorAll('.key')
        keys.forEach(key => {
            key.addEventListener('transitionend', removeTransition)
        })

        window.addEventListener('keydown', playSound)