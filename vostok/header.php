
<head>
    <?php wp_head(); ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
    <link rel="preconnect"
        href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com"
        crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
</head>

<body>
    <header class="header">
        <div class="container">
            <?php wp_nav_menu( array( 
	            'theme_location' => 'head_menu'
                ) );
            ?>
            <?php get_search_form(); ?>
            <div class="container__block">
            
                <h2 class="header__title">Поставщик Дальнего
                    Востока
                </h2>
                <p class="header__description">Наши клиенты
                    получают
                    полный спектр услуг по
                    работе с Китаем. Начиная с подбора
                    производителя
                    заканчивая доставкой товара до двери.
                </p>
                <a class="header__link" href="http://wptest.loc/o-nas/">Узнать
                    больше</a>
            </div>
            <div class="header__green-block"> 
        </div>
        </div>
        <img class="header__img" src="<?php echo get_template_directory_uri(); ?>/img/headerImg.jpg"
            alt="Грузовой автомобиль">
    </header>

