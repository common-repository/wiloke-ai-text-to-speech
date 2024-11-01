<?php
$value = $this->aConfig['admin_add_post']['language'];
?>
<label for='language'>Choose language:</label>
<select name='language' id='language'>
	<?php
	$select = get_post_meta($post->ID, 'language', true);;
	foreach ($value as $key => $val) {
		$selected = ($select == $key) ? 'selected' : '';
		echo "<option value='" . esc_attr($key) . "'" . $selected . ">" . esc_html($val) . "</option>";
	}
	?>
</select>