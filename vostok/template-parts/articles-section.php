<section class="article">
    <h2 class="partners__title">
        Статьи
    </h2>
    <div class="article-list">
    <?php
global $post;

$myposts = get_posts( 'category=3' );

foreach( $myposts as $post ){
	//setup_postdata( $post );
    //var_dump($post); посмотреть что в переменной
	?>
        <a class="article-item link" href="<? echo get_the_permalink($post);?>"><?php echo $post->post_title ?> </a>
	<?php
}
//wp_reset_postdata();
?>
</div>

</section>