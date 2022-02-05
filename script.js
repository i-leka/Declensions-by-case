$(document).ready(function () {

	const firstA = ['ы', 'е', 'у', 'ой', 'е'];
	const firstYa = ['и', 'и', 'ю', 'ей', 'и'];
	const secondE = ['я', 'ю', 'е', 'ем', 'и'];
	const secondO = ['а', 'у', 'о', 'ом', 'е'];
	const second0 = ['а', 'у', '', 'ом', 'е'];
	const third = ['и', 'и', 'ь', 'ью', 'и'];

	$('form').submit(function (e) {
		e.preventDefault();

		let orig = $('#word').val();
		$('.original-word').html(orig);
		$('.selected-case-word').html($('select option:selected').text());

		let sel = orig.slice(0, -1);
		let last = orig.substr(-1);
		let selectValue = parseInt($('select').val(), 10);
		switch (last) {
			case 'а':
				sel += firstA[selectValue];
				break;
			case 'я':
				sel += firstYa[selectValue];
				break;
			case 'е':
				sel += secondE[selectValue];
				break;
			case 'о':
				sel += secondO[selectValue];
				break;
			case 'ь':
				sel += third[selectValue];
				break;
			default:
				sel = orig + second0[selectValue];
				break;
		}
		$('.selected-word').html(sel);
	});

});