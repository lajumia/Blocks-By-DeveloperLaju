<?php

$tag =array('h1','h2','h3','h4','h5','h6','p','span','div');
$align = array('left', 'center', 'right');

$index = $attributes['selectedTag'];
$align_index = $attributes['selectedAlign'];
$text_color = $attributes['textColor'];
$background_color = $attributes['backgroundColor'];
$font_family = $attributes['fontFamily'];
$font_size = $attributes['fontSize'];
$font_weight = $attributes['fontWeight'];
$line_height = $attributes['lineHeight'];
$letter_spacing = $attributes['letterSpacing'];
$font_style = $attributes['fontStyle'];
$text_transform = $attributes['textTransform'];
$text_decoration = $attributes['textDecoration'];
$margin_top = $attributes['marginTop'];
$margin_bottom = $attributes['marginBottom'];
$margin_left = $attributes['marginLeft'];
$margin_right = $attributes['marginRight'];
$padding_top = $attributes['paddingTop'];
$padding_bottom = $attributes['paddingBottom'];
$padding_left = $attributes['paddingLeft'];
$padding_right = $attributes['paddingRight'];


?>
<div>
    <<?php echo $tag[$index]; ?> 

    style="<?php echo 
    'text-align:'.$align[$align_index].
    '; color:'.$text_color.
    '; background-color:'.$background_color.
    '; font-family:'.$font_family.
    '; font-size:'.$font_size.
    'px; font-weight:'.$font_weight.
    '; line-height:'.$line_height.
    '; letter-spacing:'.$letter_spacing.
    'px; font-style:'.$font_style.
    '; text-transform:'.$text_transform.
    '; text-decoration:'.$text_decoration.
    '; margin-top:'.$margin_top.
    'px; margin-bottom:'.$margin_bottom.
    'px; margin-left:'.$margin_left.
    'px; margin-right:'.$margin_right.
    'px; padding-top:'.$padding_top.
    'px; padding-bottom:'.$padding_bottom.
    'px; padding-left:'.$padding_left.
    'px; padding-right:'.$padding_right.
    'px;';
    
    ?>"

    <?php echo get_block_wrapper_attributes( )?>>
    <?php echo $attributes['content']?>
    </<?php echo $tag[$index]; ?>>

</div>