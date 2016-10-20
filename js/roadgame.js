    var maxG = 311;
    var canvas;
    var canvasContext;
	var intervalId;
    var playerx = 210;
    var playery = 260 + 50;
    var pack1ax = 160;
    var pack1bx = 260;
    var pack2ax = 210;
    var pack2bx = 260;
    var pack3ax = 160;
    var pack3bx = 210;
    var pack1ay = 10 + 50;
    var pack1by = 10 + 50;
    var pack2ay = -90 + 50;
    var pack2by = -90 + 50;
    var pack3ay = -190 + 50;
    var pack3by = -190 + 50;
    var score = 0;
    var rate = 300;
    var beforex;
    var beforey = playery;
	var btn,t,btn2,t2;

    document.onkeydown = checkKey;

    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            moveLeft();
        } else if (e.keyCode == '39') {
            moveRight();
        }
    }

    window.onload = function() {
        canvas = document.getElementById('a_game');
        canvasContext = canvas.getContext('2d');
		 createButton(); 
		
		
		
		preInit();
		 
       
    }
	
	
	createButton = function(){
		 btn = document.createElement("BUTTON"); 
         btn.onclick=function(){
		 btn.disabled = true;	 
		intervalId = setInterval(update, rate);
	    } ;		 
         t = document.createTextNode("Play!!!!");       
        btn.appendChild(t);                              
        document.body.appendChild(btn); 
		
		btn2 = document.createElement("BUTTON"); 
         btn2.onclick=function(){
			 clearInterval(intervalId);
			
		     init();
			 preInit();
	    } ;		 
         t2 = document.createTextNode("stop");       
        btn2.appendChild(t2);                              
        document.body.appendChild(btn2); 
	}

    update = function() {
        drawCanvas();
        drawSystem();
        drawPlayer();
        if (beforey == pack1ay || beforey == pack2ay || beforey == pack3ay) {
            if (beforey == pack1by) {
                if (beforex == pack1ax) {
					canvasContext.drawImage(car1, beforex, beforey, 30, 30);
                } else if(beforex == pack1bx) {
					canvasContext.drawImage(car2, beforex, beforey, 30, 30);
				}
            } else if (beforey == pack2by) {
                if (beforex == pack2ax) {
					canvasContext.drawImage(car2, beforex, beforey, 30, 30);
                } else if (beforex == pack2bx) {
					canvasContext.drawImage(car3, beforex, beforey, 30, 30);
				}
            } else if (beforey == pack3by) {
                if (beforex == pack3ax) {
                    canvasContext.drawImage(car3, beforex, beforey, 30, 30);
                } else if(beforex == pack3bx) {
					canvasContext.drawImage(car1, beforex, beforey, 30, 30);
				}
            }
        }
         if (playery == pack1ay || playery == pack2ay || playery == pack3ay) {
            if (playery == pack1by) {
                if (playerx == pack1ax || playerx == pack1bx) {
					canvasContext.drawImage(fire, playerx, playery-30, 30, 60);
                   stop();
                }
            } else if (playery == pack2by) {
                if (playerx == pack2ax || playerx == pack2bx) {
                    canvasContext.drawImage(fire, playerx, playery-30, 30, 60);
                    stop();
                }
            } else if (playery == pack3by) {
                if (playerx == pack3ax || playerx == pack3bx) {
                    canvasContext.drawImage(fire, playerx, playery-30, 30, 60);
                   stop();
                }
            }
        }
    }
	function stop(){
		confirm("ooooopss your score is  " + score);
		clearInterval(intervalId);
        init();
	}

    drawCanvas = function() {
        canvasContext.fillStyle = 'green';
        canvasContext.fillRect(0, 50, canvas.width, canvas.height);
        canvasContext.fillStyle = 'black';
        canvasContext.fillRect(canvas.width / 3, 50, 150, canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(canvas.width / 3 + 50, 50, 1, canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(canvas.width / 3 + 100, 50, 1, canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(canvas.width / 3 + 150, 50, 1, canvas.height);
		

        score++;
        console.log("hellooo there");
    }

    drawSystem = function() {

        pack1ay += 50;
        pack1by += 50;
        pack2ay += 50;
        pack2by += 50;
        pack3ay += 50;
        pack3by += 50;

        if ((pack1ay > maxG)) {
            var b = (Math.floor(Math.random() * 100)) % 3;
            if (b == 0) {
                pack1ax = 160;
                pack1bx = 260;
            } else if (b == 1) {
                pack1ax = 160;
                pack1bx = 210;
            } else {
                pack1ax = 210;
                pack1bx = 260;
            }
            pack1ay = 60;
            pack1by = 60;
        } else if (pack2by > maxG) {
            var b = (Math.floor(Math.random() * 100)) % 3;
            if (b == 0) {
                pack2ax = 160;
                pack2bx = 260;
            } else if (b == 1) {
                pack2ax = 160;
                pack2bx = 210;
            } else {
                pack2ax = 210;
                pack2bx = 260;
            }
            pack2ay = 60;
            pack2by = 60;
        } else if (pack3by > maxG) {
            var b = (Math.floor(Math.random() * 100)) % 3;
            if (b == 0) {
                pack3ax = 160;
                pack3bx = 260;
            } else if (b == 1) {
                pack3ax = 160;
                pack3bx = 210;
            } else {
                pack3ax = 210;
                pack3bx = 260;
            }
            pack3ay = 60;
            pack3by = 60;
        }

        canvasContext.drawImage(car1, pack1ax, pack1ay, 30, 30);
        canvasContext.drawImage(car2, pack1bx, pack1by, 30, 30);

        canvasContext.drawImage(car2, pack2ax, pack2ay, 30, 30);
        canvasContext.drawImage(car3, pack2bx, pack2by, 30, 30);

        canvasContext.drawImage(car3, pack3ax, pack3ay, 30, 30);
        canvasContext.drawImage(car1, pack3bx, pack3by, 30, 30);

        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(150, 10, 150, 40);
    }

    moveLeft = function() {
        if (playerx != 160) {
            beforex = playerx;
            playerx -= 50;
        }
        drawPlayer();
    }
    moveRight = function() {
        if (playerx != 260) {
            beforex = playerx;
            playerx += 50;
        }
        drawPlayer();
    }

    drawPlayer = function() {
        canvasContext.drawImage(car, playerx, playery, 30, 30);
		 canvasContext.fillStyle = 'black';
         canvasContext.fillRect(beforex,beforey,30,30);
    }
	preInit = function(){
		drawCanvas();
		drawSystem();
		drawPlayer();
		
	}
	

    init = function() {
        maxG = 311;
        canvas;
        canvasContext;
        playerx = 210;
        playery = 260 + 50;
        pack1ax = 160;
        pack1bx = 260;
        pack2ax = 210;
        pack2bx = 260;
        pack3ax = 160;
        pack3bx = 210;
        pack1ay = 10 + 50;
        pack1by = 10 + 50;
        pack2ay = -90 + 50;
        pack2by = -90 + 50;
        pack3ay = -190 + 50;
        pack3by = -190 + 50;
        score = 0;
        beforex = -60;
        beforey = playery;
        btn.disabled=false;
    }