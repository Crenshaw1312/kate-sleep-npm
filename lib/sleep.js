/**
 * @param {Object} opts - Stuff for Kate.
 * @param {[('Baby Fox')]} [opts.stuffedAnimals] - Stuffed animals to help Kate sleep better.
 * @param {Boolean} [opts.cozyBed] - A cozy bed for Kate to sleep in
 */

module.exports = opts => {
	if (isSleeping) return console.log('Zzz, Kate is Already sleeping');
	let kateInfo = 'Zzz';
	if (opts.stuffedAnimals) {
		if (Array.isArray(opts.stuffedAnimals)) kateInfo += `, sleeping with a ${opts.stuffedAnimals.join(', ')}`;
		else kateInfo += `, sleeping with a ${opts.stuffedAnimals}`;
	}
	if (opts.cozyBed) kateInfo += ', in a cozy bed';
	isSleeping = true;
	console.log(kateInfo);
};
