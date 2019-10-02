<?php 
get_header();
global $wp_query;
?>
<div class="main-container">
	<div class="main-grid">
		<main
			class="posts-list"
			data-page="<?= get_query_var('paged') ? get_query_var('paged') : 1; ?>"
			data-max="<?= $wp_query->max_num_pages; ?>"
		>
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<?php get_template_part('template-parts/content'); ?>
				<?php endwhile; ?>
			<?php endif; ?>
		</main>
		<button class="button primary large expanded load-more">Load More Posts</button>
	</div>
</div>
<?php get_footer();
