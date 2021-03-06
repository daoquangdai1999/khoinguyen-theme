<?php
$banners = rwmb_meta('banner_group');
$banner_static = rwmb_meta('banner_static')

?>
<section class="home__banner row">

	<div class="home__banner-wrapper col-10">
		<?php
		foreach ($banners as $banner) :
			$desktop_image = wp_get_attachment_image_url($banner['banner_image'], 'full');

		?>
			<a href="<?= $banner['banner_link'] ?>" class="home__banner-item">
				<img src="<?= $desktop_image ?>" loading="lazy">
			</a>
		<?php endforeach ?>
	</div>
	<div class="home_banner-static col-2">
		<?php
		foreach ($banner_static as $banner) :
			$desktop_image = wp_get_attachment_image_url($banner['anh'], 'full');

		?>
			<a href="<?= $banner['link_image'] ?>" class="home__banner-item">
				<img src="<?= $desktop_image ?>" loading="lazy">
			</a>
		<?php endforeach ?>
		<a href="#" class="sale">Khuyến Mãi <i class="bi bi-chevron-right"></i></a>
	</div>
	<div class="home_about_us col-12 row">
		<?php
		$abouts = rwmb_meta('featured_item');

		if (empty($abouts)) {
			return;
		}
		foreach ($abouts as $about) :
			$desktop_image = wp_get_attachment_image_url($about['image_icon'], 'full');


		?>
			<div class="home_about-item col-3">
				<div class="box-image">
					<img src="<?= $desktop_image ?>" loading="lazy">
				</div>
				<div class="box-content">
					<p class="featured-title"><?= $about['featured-title'] ?></p>
					<p class="mota"><span><?= $about['featured-sub-title'] ?></span></p>
				</div>
			</div>
		<?php endforeach ?>
	</div>
</section>