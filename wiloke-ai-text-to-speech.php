<?php
/**
 * @package wiloke-ai-text-to-speech
 */

/*
 * Plugin Name: Wiloke AI Text To Speech
 * Plugin URI: https://wiloke.com/product/wiloke-ai-text-to-speech/
 * Description: Text to Speech (also abbreviated as TTS) is a form of assistive technology that can read digital texts out loud. It is commonly known as read-aloud technology. The biggest attraction of this technology is that it is really simple to use. With a single touch of a finger, you will be able to convert all the text words on a website into audio and on any device such as smartphones, laptops, desktops, and tablets.
 * Author: Wiloke
 * Version: 1.1
 * Text Domain: wiloke-ai-text-to-speech
 * License: GPLv2 or later
 * Tested up to: 5.8
 * Stable tag: 1.1
 * Author URI: https://wiloke.com/
 */

define('VERSION_AI_SPEECH', 1.1);
define('DIR_PATH_AI_SPEECH', plugin_dir_path(__FILE__));
define('DIR_URL_AI_SPEECH', plugin_dir_url(__FILE__));

require_once DIR_PATH_AI_SPEECH . 'vendor/autoload.php';

new WilokeAiTextToSpeech\Controllers\AISpeechAdminSettingsController();
new WilokeAiTextToSpeech\Controllers\AISpeechFrontEndController();
