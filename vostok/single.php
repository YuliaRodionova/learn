<?php

 get_header(); ?>

<?php if ( have_posts() ) { while ( have_posts() ) { the_post(); ?>
	<!-- Цикл WordPress -->
	<!-- Вывод постов: the_title() и т.д. -->
    <article class="article">
        <?php
//проверка есть ли заголовок, если есть - выводим
if(get_the_title() != ''){ ?>
    <h1 class="article-title"> <?php echo get_the_title(); ?></h1>
   
    <?php } ?>
    <?php
    echo '<div class="article-content">';
    the_content();
    echo '</div>';

    //echo '<div class="page-content">'.get_the_content().'</div>'; . это как + в js
    ?>
    
</article>

<?php }} ?>

<ul class="article-list">

<li class="partners__title">
        Другие статьи:
</li>
<?php

// Цикл
//global $wp_query;
    $cat_current = get_the_category(get_the_ID());
    $cat_ID = $cat_current[0]->cat_ID;
    $this_post = get_the_ID();
    $another_posts = new WP_Query(array('cat' => $cat_ID, 'post__not_in' => array($this_post)));?>

<?php while ($another_posts->have_posts() ) { $another_posts->the_post(); ?>


<li class="article-item">
    <a class="article-item__link link" href="<?php the_permalink(); ?>">
        <?php the_post_thumbnail('thumbnail'); ?>
        <h2><?php the_title(); ?></h2>
    </a>
</li>

<?php }; ?>
</ul>

<?php
 get_footer();
 ?>
 