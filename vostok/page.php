<?php

 get_header(); ?>
 <?php

$args = array(
	'post_type' => 'page'
);
$query = new WP_Query;
$my_posts = $query->query($args);

foreach( $my_posts as $my_post ){
	echo '<p class="page-title">'. $my_post->post_title .'</p >';
    echo '<div class="page-content">' . do_shortcode(get_the_content())  .'</div>';
} ?>

<?php 


 get_footer();
 ?>
