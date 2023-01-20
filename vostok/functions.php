<?php
//Подключаем стили и скрипты
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
// add_action('wp_print_styles', 'theme_name_scripts'); // можно использовать этот хук он более поздний
function theme_name_scripts() {
	
	wp_enqueue_style( 'style-swiper', get_template_directory_uri() . '/swiper-bundle.min.css' );
	wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css' );
	wp_enqueue_style( 'default-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_script( 'script-swiper', get_template_directory_uri() . '/swiper-bundle.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true );
}
//Включаем возможность установки миниатюры для постов
add_theme_support( 'post-thumbnails' ); // для всех типов постов

//добавляем меню
register_nav_menus(
	array(
		'head_menu' => 'Шапка сайта', // id области => Название области
		'footer_menu' => 'Футер'
	)
);

// удаляет H2 из шаблона пагинации
add_filter('navigation_markup_template', 'my_navigation_template', 10, 2 );
function my_navigation_template( $template, $class ){
	/*
	Вид базового шаблона:
	<nav class="navigation %1$s" role="navigation">
		<h2 class="screen-reader-text">%2$s</h2>
		<div class="nav-links">%3$s</div>
	</nav>
	*/

	return '
	<nav class="navigation %1$s" role="navigation">
		<div class="nav-links">%3$s</div>
	</nav>
	';
}

// выводим пагинацию
the_posts_pagination( array(
	'end_size' => 2,
) );

add_action( 'init', 'test_register_post_types' );

function test_register_post_types(){

	register_post_type( 'employee', [
		'labels' => [
			'name'               => 'Сотрудники', // основное название для типа записи
			'singular_name'      => 'Сотрудник', // название для одной записи этого типа
			'all_items'            => 'Все сотрудники',
		],
		'public'                 => true,
		'menu_icon'           => 'dashicons-businessperson',
		'supports'            => [ 'title', 'editor' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields',
		
	] );

};

add_theme_support( 'html5', array( 'search-form' ) );


add_filter( 'get_search_form', 'my_search_form' );
function my_search_form( $form ) {

	$form = '
	<form role="search" method="get" id="searchform" action="' . home_url( '/' ) . '" >
		<label class="screen-reader-text" for="s">Запрос для поиска:</label>
		<input type="text" value="' . get_search_query() . '" name="s" id="s" />
		<input type="submit" id="searchsubmit" value="Найти" />
	</form>';

	return $form;
}