var consulta = window.matchMedia('(max-width: 500px)') //es la forma de hacer media queries en js
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");
//$burguerButton.addEventListener( 'click'/*'touchstart'*/, /*que queremos hacer*/ toggleMenu );  este evento paso dentro de la función mediaQuery
function toggleMenu(){
			$menu.classList.toggle("active")//esto lo que va hacer es que active se ponga left cero lo que nos permitira ver el menu, si hacemos click true, si queremos esconederlo false
		}
		function showMenu(){
			$menu.classList.add("active");
		}
		function hideMenu(){
			$menu.classList.remove("active");
		}
			
	function mediaQuery(){
		
		if (consulta.matches) {
			console.log('secumplió la condición')
			$burguerButton.addEventListener( 'click', toggleMenu );
			}
		else{
			console.log('no se cumplió la condicion');
			$burguerButton.removeEventListener( 'click', toggleMenu ); //remove nos ayuda a apagar un evento
		}
	}
	mediaQuery();
console.log(consulta)


// .................ahorrar la carga de las imagenes ...................
var blazy = new Blazy({
			//options
		selector: 'img'
					});
//lazy loading


// ................touch con jammer js............................
var $body = document.body;
var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);

// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
// 	console.log(ev);
// });


var minifyHTML = require('gulp-minify-html');
 
gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};
    
  gulp.src('./static/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});




//...............................menu de hamburhguesa.................................
		// var $burguerButton = document.getElementById("burguer-button");
		// var $menu = document.getElementById("menu");
		// $burguerButton.addEventListener( 'click'/*'touchstart'*///, /*que queremos hacer*/ toggleMenu );
		// function toggleMenu(){
		// 	$menu.classList.toggle("active")//esto lo que va hacer es que active se ponga left cero lo que nos permitira ver el menu, si hacemos click true, si queremos esconederlo false
		// }
		// //togleMenu es la funcion dentor del addEventlistener que nos permitira hacer
		// //hacer toggle es decir que podremos habrir y cerrar el menu 
		// //classList es una forma de llamar un selector de css 
