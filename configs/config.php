<?php
return [
	'admin_add_post' => [
		'language' => [
			'none'     => __('None', 'wiloke-ai-text-to-speech'),
			'english'  => __('English', 'wiloke-ai-text-to-speech'),
			'korean'   => __('Korean', 'wiloke-ai-text-to-speech'),
			'russian'  => __('Russian', 'wiloke-ai-text-to-speech'),
			'japanese' => __('Japanese', 'wiloke-ai-text-to-speech'),
			'french'   => __('French', 'wiloke-ai-text-to-speech'),
			'chinese'  => __('Chinese', 'wiloke-ai-text-to-speech'),
		]
	],

	'front_end'      => [
		'english' => [
			'heading' => 'English',
			'attrs'   => [
				'class'          => 'wil-text-to-speech',
				'data-lang'      => 'en-US',
				'data-voice'     => 'Google UK English Male',
				'data-text'      => 'A Few weeks ago at Google I/O extended event,',
				'data-stop-text' => 'Click to stop',
				'data-color'     => '#0389ff',
			]
		],

		'japanese' => [
			'heading' => 'Japanese',
			'attrs'   => [
				'class'          => 'wil-text-to-speech',
				'data-lang'      => 'ja-JP',
				'data-voice'     => 'Google 日本語',
				'data-text'      => '削除された要素を含む配列。 1つの要素のみが削除されると、1つの要素の配列が返されます。 要素が削除されない場合、空の配列が返されます。',
				'data-stop-text' => 'Click to stop',
				'data-color'     => '#0389ff',
			]
		],

		'chinese' => [
			'heading' => 'Chinese',
			'attrs'   => [
				'class'          => 'wil-text-to-speech',
				'data-lang'      => 'zh-TW',
				'data-voice'     => 'Google 國語（臺灣）',
				'data-text'      => '包含已删除元素的数组。 如果仅删除一个元素，则返回一个元素的数组。 如果没有删除任何元素，则返回一个空数组。',
				'data-stop-text' => 'Click to stop',
				'data-color'     => '#0389ff',
			]
		],

		'french' => [
			'heading' => 'French',
			'attrs'   => [
				'class'          => 'wil-text-to-speech',
				'data-lang'      => 'fr-FR"',
				'data-voice'     => 'Google français',
				'data-text'      => "Un tableau contenant les éléments supprimés. Si un seul élément est supprimé, un tableau d\'un élément est renvoyé. Si aucun élément n\'est supprimé, un tableau vide est renvoyé.",
				'data-stop-text' => 'Click to stop',
				'data-color'     => '#0389ff',
			]
		],

		'russian' => [
			'heading' => 'Russian',
			'attrs'   => [
				'class'          => 'wil-text-to-speech',
				'data-lang'      => 'ru-RU',
				'data-voice'     => 'Google русский',
				'data-text'      => 'Чтобы нам было легче, давайте попробуем передать некоторые данные из нашего компонента Board в наш компонент Square.',
				'data-stop-text' => 'Click to stop',
				'data-color'     => '#0389ff',
			]
		],

		'korean' => [
			'heading' => 'Korean',
			'attrs'   => [
				'class'          => 'wil-text-to-speech',
				'data-lang'      => 'ko-KR"',
				'data-voice'     => 'Google 한국의',
				'data-text'      => '발을 젖게하려면 보드 구성 요소에서 사각형 구성 요소로 일부 데이터를 전달해 보겠습니다. 복사 / 붙여 넣기를 사용하지 않고 튜토리얼을 진행하면서 코드를 직접 입력하는 것이 좋습니다.',
				'data-stop-text' => 'Click to stop',
				'data-color'     => '#0389ff',
			]
		],
	]];