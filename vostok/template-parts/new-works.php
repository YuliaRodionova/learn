<?php
$args = array(
	'post_type' => 'work',
);
?>
<?php $query = new WP_Query( $args );
?>
<?php if ( $query->have_posts() ) { ?>
	

<section class="works">
    <h2 class="works__title">Выполненные работы</h2>
    <p class="works__description">
        Мы собрали информацию по грузам, которые мы уже
        доставили. У нас специальный подход к каждому
        виду товаров.

    </p>
    <div class=" worksSlide">
        <div class="swiper-wrapper">
        <?php while ( $query->have_posts() ) {
		$query->the_post();
		 ?>
    
            <div class="swiper-slide">
                    <img class="swiper-slide__img"
                        src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" alt="">
                    <div class="swiper-slide__container">
                        <h3
                            class="swiper-slide__container-title">
                            <?php the_title() ?></h3>
                        <p
                            class="swiper-slide__container-description">
                            <?php echo get_the_content();?></p>
                        <span
                            class="swiper-slide__container-price">
                            <?php echo get_field('price'); ?></span>
                    </div>
                </div>
       <? }
        ?>

        </div>
        <div class="swiper-pagination"></div>
    </div>
</section>
<?php } ?>

<?php  // Возвращаем оригинальные данные поста. Сбрасываем $post.
wp_reset_postdata(); ?>