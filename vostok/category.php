<?php

 get_header(); 
 ?>

<div class="category-list">
 <?php

$query = new WP_Query( [
	'posts_per_page' => 3,
	'orderby'        => 'id',
	'order'          => 'DESC',
	'paged' => get_query_var('paged') ?: 1
] );

// Цикл
global $post;

if ( $query->have_posts() ) {
	while ( $query->have_posts() ) {
		$query->the_post();?>
		<div class="category-item">
		<?php the_post_thumbnail('full'); ?>
		<a class="link" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		<p> <?php the_excerpt(); ?></p>
		
		</div>
		
		

        <?php }
}
wp_reset_postdata();
?>
<?php the_posts_pagination( array(
 'type' => 'list'
)); ?>
</div>
<?php

get_footer();
?>
