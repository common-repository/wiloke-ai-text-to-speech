<?php

namespace WilokeAiTextToSpeech\Controllers;

class AISpeechFrontEndController
{
	private $aConfig;

	public function __construct()
	{
		add_filter('the_content', [$this, 'viewAITextToSpeech']);
		add_action('wp_enqueue_scripts', [$this, 'addScriptSpeechLanguage']);
		add_action('wp_enqueue_scripts', [$this, 'addStyleSpeechLanguage']);

		$this->aConfig = include DIR_PATH_AI_SPEECH . 'configs/config.php';
		$this->aConfig = $this->aConfig['front_end'];
	}

	/**
	 * @param $content
	 * @return string
	 *
	 */
	public function viewAITextToSpeech($content)
	{
		global $post;
		$isPostLanguage = get_post_meta($post->ID, 'language', true);

		ob_start();
		if (!empty($isPostLanguage) && $isPostLanguage !== 'none') :
			?>
            <div class="wil-ai-ttp">
                <div
				<?php
				foreach ($this->aConfig[$isPostLanguage]['attrs'] as $attr => $value) :
					if ($attr == 'data-text') {
						$value = trim(strip_tags(do_shortcode($content)));
					}
					?>
					<?php echo esc_html($attr); ?>="<?php echo esc_attr($value); ?>",
				<?php
				endforeach;
				?>
                ></div>
            </div>
		<?php
		endif;
		$content = ob_get_contents() . $content;
		ob_end_clean();
		return $content;
	}

	public function addStyleSpeechLanguage()
	{
		wp_enqueue_style(
			'wiloke-ai-ttp-add-style',
			DIR_URL_AI_SPEECH . 'assets/css/style.css',
			[],
			VERSION_AI_SPEECH,
			'all'
		);
	}

	public function addScriptSpeechLanguage()
	{
		wp_register_script(
			'wiloke-ai-ttp-add-script',
			DIR_URL_AI_SPEECH . 'assets/js/main.js',
			[],
			VERSION_AI_SPEECH,
			true
		);

		wp_enqueue_script('wiloke-ai-ttp-add-script');
	}
}
