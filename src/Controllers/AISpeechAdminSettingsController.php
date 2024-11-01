<?php

namespace WilokeAiTextToSpeech\Controllers;

class AISpeechAdminSettingsController
{
	private   $aConfig;
	protected $nonce;

	public function __construct()
	{
		add_action('add_meta_boxes', [$this, 'sidebarAdminAddPost']);
		add_action('save_post', [$this, 'saveSpeechLanguage']);
		$this->aConfig = include DIR_PATH_AI_SPEECH . "configs/config.php";
	}

	public function sidebarAdminAddPost()
	{
		add_meta_box(
			'wiloke-ai-ttp-sidebar-add-post',
			'AI text to speech',
			[$this, 'renderSettings'],
			['post'],
			'side',
			'default',
			null
		);

		wp_register_script(
			'wiloke-ai-ttp-script',
			DIR_URL_AI_SPEECH . 'assets/js/ai-speech-script.js',
			['jquery'],
			VERSION_AI_SPEECH,
			true
		);

		wp_localize_script(
			'wiloke-ai-ttp-script',
			'AI_SPEECH',
			[
				'ajaxUrl' => admin_url('admin-ajax.php'),
				'postId'  => get_the_ID(),
				'nonce'   => wp_create_nonce('wiloke-ai-ttp-nonce')
			]
		);

		wp_enqueue_script('wiloke-ai-ttp-script');
	}

	/**
	 * @param $post
	 */
	public function renderSettings($post)
	{
		include DIR_PATH_AI_SPEECH . 'src/Views/admin-edit-post-sidebar/index.php';
	}

	/**
	 * @param $post_id
	 */
	public function saveSpeechLanguage($post_id)
	{
		if (!check_ajax_referer('wiloke-ai-ttp-nonce', 'nonce', false)) {
			if (!empty($_POST['language'])) {
				$value = sanitize_text_field($_POST['language']);
				update_post_meta($post_id, 'language', $value);
				wp_send_json_success(['msg' => 'The speech language has been saved']);
			}
		} else {
			wp_send_json_error(['msg' => 'Your nonce is not exists']);
		}
	}
}