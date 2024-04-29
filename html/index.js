
$(function () {
    window.addEventListener("message", function(event) {
        var item = event.data;
        if (item.action === "notify") {
            var number = Math.floor((Math.random() * 1000) + 1);
            var audio = document.getElementById("pop");
            audio.play();
            if (item.type === "success") {
                $('.fx').append(`
            <div class="fx_notify-wrapper-${number}" >
                    <div class="fx_notify-icon-wrapper-${number}"></div>
                    <div class="fx_notify-text-wrapper-${number}">
                        <div class="text-${number}">
                            ${item.message}
                        </div>
                    </div>
                    <div class="title-${number}">
                            ${item.title}
                        </div>
                        <div class="progress-bar-${number}"></div>
            </div>`)
            $('.fx').css({
                "float": "right",
                "overflow": "hidden"
            })
            $(`.fx_notify-wrapper-${number}`).css({
                "margin-top": "2%",
                "width": "300px",
                "height": "75px",
                "transform": "translateX(1000%)",
                "display": "flex",
                "opacity": "1",
                "background-color": "rgba(30,30,30,0.9)",
                "clip-path": "polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 20%)",
                "animation": "slide-in 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.0) forwards"
            })
            $(`.fx_notify-icon-wrapper-${number}`).addClass('success-icon')
            $(`.fx_notify-icon-wrapper-${number}`).css({
                "position": "absolute",
                "top": "50%",
                "left": "10%",
                "transform": "translate(-50%, -50%)",
                "display": "grid",
                "align-content": "center",
                "color": "white",
                "font-size": "2em",
                "font-weight": "900"
            })
            $(`.text-${number}`).css({
                "color": "white"
            })
            $(`.fx_notify-text-wrapper-${number}`).css({
                "position": "absolute",
                "top": "45%",
                "left": "17.5%",
                "display": "grid",
                "text-aling": "left",
                "color": "white",
                "font-size": "16px",
                "font-family": "FontAwesome"
            })
            $(`.title-${number}`).css({
                "position": "absolute",
                "top": "20%",
                "left": "17.5%",
                "color": "white",
                "font-weight": "bold",
                "text-aling": "left"
            })
            $(`.progress-bar-${number}`).css({
                "position": "absolute",
                "bottom": "0",
                "left": "0",
                "width": "100%",
                "height": "5px",
                "background-color": "#49be25"
            })
            }else if (item.type === "warning") {
                $('.fx').append(`
            <div class="fx_notify-wrapper-${number}" >
                    <div class="fx_notify-icon-wrapper-${number}"></div>
                    <div class="fx_notify-text-wrapper-${number}">
                        <div class="text-${number}">
                            ${item.message}
                        </div>
                    </div>
                    <div class="title-${number}">
                            ${item.title}
                        </div>
                        <div class="progress-bar-${number}"></div>
            </div>`)
            $('.fx').css({
                "float": "right",
                "overflow": "hidden"
            })
            $(`.fx_notify-wrapper-${number}`).css({
                "margin-top": "2%",
                "width": "300px",
                "height": "75px",
                "transform": "translateX(1000%)",
                "display": "flex",
                "opacity": "1",
                "background-color": "rgba(30,30,30,0.9)",
                "clip-path": "polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 20%)",
                "animation": "slide-in 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.0) forwards"
            })
            $(`.fx_notify-icon-wrapper-${number}`).addClass('warning-icon')
            $(`.fx_notify-icon-wrapper-${number}`).css({
                "position": "absolute",
                "top": "50%",
                "left": "10%",
                "transform": "translate(-50%, -50%)",
                "display": "grid",
                "align-content": "center",
                "color": "white",
                "font-size": "2em",
                "font-weight": "900"
            })
            $(`.text-${number}`).css({
                "color": "white"
            })
            $(`.fx_notify-text-wrapper-${number}`).css({
                "position": "absolute",
                "top": "45%",
                "left": "17.5%",
                "display": "grid",
                "text-aling": "left",
                "color": "white",
                "font-size": "16px",
                "font-family": "FontAwesome"
            })
            $(`.title-${number}`).css({
                "position": "absolute",
                "top": "20%",
                "left": "17.5%",
                "color": "white",
                "font-weight": "bold",
                "text-aling": "left"
            })

            $(`.progress-bar-${number}`).css({
                "position": "absolute",
                "bottom": "0",
                "left": "0",
                "width": "100%",
                "height": "5px",
                "background-color": "#f3ef16"
            })
        
            }else if (item.type === "error") {
                $('.fx').append(`
            <div class="fx_notify-wrapper-${number}" >
                    <div class="fx_notify-icon-wrapper-${number}"></div>
                    <div class="fx_notify-text-wrapper-${number}">
                        <div class="text-${number}">
                            ${item.message}
                        </div>
                    </div>
                    <div class="title-${number}">
                            ${item.title}
                        </div>
                        <div class="progress-bar-${number}"></div>
            </div>`)
            $('.fx').css({
                "float": "right",
                "overflow": "hidden"
            })
            $(`.fx_notify-wrapper-${number}`).css({
                "margin-top": "2%",
                "width": "300px",
                "height": "75px",
                "transform": "translateX(1000%)",
                "display": "flex",
                "opacity": "1",
                "background-color": "rgba(30,30,30,0.9)",
                "clip-path": "polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 20%)",
                "animation": "slide-in 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.0) forwards"
            })
            $(`.fx_notify-icon-wrapper-${number}`).addClass('error-icon')
            $(`.fx_notify-icon-wrapper-${number}`).css({
                "position": "absolute",
                "top": "50%",
                "left": "10%",
                "transform": "translate(-50%, -50%)",
                "display": "grid",
                "align-content": "center",
                "color": "white",
                "font-size": "2em",
                "font-weight": "900"
            })
            $(`.text-${number}`).css({
                "color": "white"
            })
            $(`.fx_notify-text-wrapper-${number}`).css({
                "position": "absolute",
                "top": "45%",
                "left": "17.5%",
                "display": "grid",
                "text-aling": "left",
                "color": "white",
                "font-size": "16px",
                "font-family": "FontAwesome"
            })
            $(`.title-${number}`).css({
                "position": "absolute",
                "top": "20%",
                "left": "17.5%",
                "color": "white",
                "font-weight": "bold",
                "text-aling": "left"
            })

            $(`.progress-bar-${number}`).css({
                "position": "absolute",
                "bottom": "0",
                "left": "0",
                "width": "100%",
                "height": "5px",
                "background-color": "#be2525"
            })

            }else if (item.type === "info") {
                $('.fx').append(`
            <div class="fx_notify-wrapper-${number}" >
                    <div class="fx_notify-icon-wrapper-${number}"></div>
                    <div class="fx_notify-text-wrapper-${number}">
                        <div class="text-${number}">
                            ${item.message}
                        </div>
                    </div>
                    <div class="title-${number}">
                            ${item.title}
                        </div>
                        <div class="progress-bar-${number}"></div>
            </div>`)
            $('.fx').css({
                "float": "right",
                "overflow": "hidden"
            })
            $(`.fx_notify-wrapper-${number}`).css({
                "margin-top": "2%",
                "width": "300px",
                "height": "75px",
                "transform": "translateX(1000%)",
                "display": "flex",
                "opacity": "1",
                "background-color": "rgba(30,30,30,0.9)",
                "clip-path": "polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 20%)",
                "animation": "slide-in 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.0) forwards"
            })
            $(`.fx_notify-icon-wrapper-${number}`).addClass('info-icon')
            $(`.fx_notify-icon-wrapper-${number}`).css({
                "position": "absolute",
                "top": "50%",
                "left": "10%",
                "transform": "translate(-50%, -50%)",
                "display": "grid",
                "align-content": "center",
                "color": "white",
                "font-size": "2em",
                "font-weight": "900"
            })
            $(`.text-${number}`).css({
                "color": "white"
            })
            $(`.fx_notify-text-wrapper-${number}`).css({
                "position": "absolute",
                "top": "45%",
                "left": "17.5%",
                "display": "grid",
                "text-aling": "left",
                "color": "white",
                "font-size": "16px",
                "font-family": "FontAwesome"
            })
            $(`.title-${number}`).css({
                "position": "absolute",
                "top": "20%",
                "left": "17.5%",
                "color": "white",
                "font-weight": "bold",
                "text-aling": "left"
            })

            $(`.progress-bar-${number}`).css({
                "position": "absolute",
                "bottom": "0",
                "left": "0",
                "width": "100%",
                "height": "5px",
                "background-color": "#6c25be"
            })
            }
        }
        setTimeout(function () {
            $(`.fx_notify-wrapper-${number}`).fadeOut()
        }, item.time)

        function animateProgressBar() {
            let startTime = Date.now();
            let endTime = startTime + item.time;
            let progressBar = $(`.progress-bar-${number}`);
            
            function updateProgress() {
                let currentTime = Date.now();
                let elapsedTime = currentTime - startTime;
                let progress = 100 - ((endTime - currentTime) / item.time) * 100;
                progressBar.css("width", `${progress}%`);
    
                if (currentTime < endTime) {
                    requestAnimationFrame(updateProgress);
                }
            }
    
            updateProgress();
        }
    
        animateProgressBar();
    })
})