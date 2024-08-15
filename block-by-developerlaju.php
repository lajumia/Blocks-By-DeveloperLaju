<?php
/**
 * Plugin Name:       Block By Developerlaju
 * Description:       Highly Customizable Advanced WordPress Blocks for Performance-Driven Website..
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Md Laju Miah
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bbdl
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bbdl_block_init() 
{
	
	register_block_type( __DIR__ . '/build/heading' );
	// register_block_type( __DIR__ . '/build/copyright' );
	// register_block_type( __DIR__ . '/build/latest-post' );
	 register_block_type( __DIR__ . '/build/post-layout' );
}

add_action( 'init', 'bbdl_block_init' );

function bbdl_block_category( $categories ) 
{
    $custom_category = array(
        'slug'  => 'bbdl-category',
        'title' => __( 'BBDL Category', 'bbdl' ),
        'icon'  => 'category',
    );

    array_unshift( $categories, $custom_category );

    return $categories;
}


add_filter( 'block_categories_all', 'bbdl_block_category',9999999 );

