function start(){
  var cx1 = 240 ;
  var cx2 = 360 ;
  var cy  = 250 ;
  var r   = 100 ;
  var canvas  = document.getElementById('circle_canvas') ;
  var context = canvas.getContext('2d') ;
  
  var cw = canvas.width ;
  var ch = canvas.width ;
  context.fillStyle = 'rgb(255,255,255)' ;
  context.fillRect(0,0,cw,ch) ;
  
  context.lineWidth = 3 ;
  
  
  context.beginPath() ;
  context.arc(cx1, cy, r, 0, 2*Math.PI, true) ;
  context.fillStyle = 'rgba(255,100,100,0.5)' ;
  context.fill() ;
  
  context.beginPath() ;
  context.arc(cx2, cy, r, 0, 2*Math.PI, true) ;
  context.fillStyle = 'rgba(200,200,255,0.8)' ;
  context.fill() ;
  
  context.beginPath() ;
  context.arc(cx1, cy, r, 0, 2*Math.PI, true) ;
  context.stroke() ;
  
  context.beginPath() ;
  context.arc(cx2, cy, r, 0, 2*Math.PI, true) ;
  context.stroke() ;
  
  context.fillStyle = 'rgb(100,0,0)' ;
  context.font = '20px arial' ;
  context.textAlign = 'left' ;
  context.fillText('The Ukraine', cx1-r, 120) ;
  
  context.fillStyle = 'rgb(0,0,100)' ;
  context.font = '20px arial' ;
  context.textAlign = 'right' ;
  context.fillText('Malaysia Airlines', cx2+r, 120) ;
  
  context.fillStyle = 'rgb(100,0,0)' ;
  context.save() ;
  context.translate(cx1-0.25*r, cy) ;
  context.rotate(-0.5*Math.PI) ;
  context.textAlign = 'center' ;
  context.fillText('Crimean crisis', 0, 0) ;
  context.restore() ;
  
  
  context.fillStyle = 'rgb(0,0,100)' ;
  context.save() ;
  context.translate(cx2+0.35*r, cy) ;
  context.rotate(-0.5*Math.PI) ;
  context.textAlign = 'center' ;
  context.fillText('Flight MH370', 0, 0) ;
  context.restore() ;
  
  
  context.fillStyle = 'rgb(0,0,0)' ;
  context.save() ;
  context.translate(0.5*(cx1+cx2), cy) ;
  context.rotate(-0.5*Math.PI) ;
  context.textAlign = 'center' ;
  context.fillText('Flight MH17', 0, 0) ;
  context.restore() ;
  
  context.textAlign = 'center' ;
  context.font = '30px arial' ;
  context.fillText('Sad and disturbing news in 2014', 0.5*(cx1+cx2), 70) ;
}


