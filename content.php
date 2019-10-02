<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header>
		<?php the_title('<h1>', '</h1>'); ?>
	</header>
	<div class="entry-content">
		<?php the_post_thumbnail('medium'); ?>
	</div>
	<hr />
</article>
