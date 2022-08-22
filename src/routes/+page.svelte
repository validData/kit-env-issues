<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { PUBLIC_FOO } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Environment variables</h1>
<p>Hydration is disabled to show the server-side issues</p>

<h2>Dynamic Public</h2>
<p><code>{"import {env} from '$env/dynamic/public';"}</code></p>
<p>
	<code
		>env.PUBLIC_FOO = {env.PUBLIC_FOO} (should be "foo" -
		<strong> {env.PUBLIC_FOO === 'foo' ? 'SUCCEEDED' : 'FAILED'}</strong>)</code
	>
</p>

<h2>Dynamic Private</h2>
<p>
	Page endpoint loads dynamic private variable <code>env.PRIVATE_BAR</code> and checks whether it has
	the expected value "bar"
</p>
<p>
	<code
		>dynamicIsValid: <string>{data.dynamicIsValid}</string> (should be true -
		<strong>{data.dynamicIsValid ? 'SUCCEEDED' : 'FAILED'}</strong>)</code
	>
</p>

<h2>Static Public</h2>
<p><code>{"import { PUBLIC_FOO } from '$env/static/public';"}</code></p>
<p>
	<code
		>PUBLIC_FOO = {PUBLIC_FOO} (should be "foo" -
		<strong>{PUBLIC_FOO === 'foo' ? 'SUCCEEDED' : 'FAILED'}</strong>)</code
	>
</p>
<h2>Static Private</h2>
<p>
	Page endpoint loads static private variable <code>env.PRIVATE_BAR</code> and checks whether it has
	the expected value "bar"
</p>
<p>
	<code
		>staticIsValid: {data.staticIsValid} (should be true -
		<strong>{data.staticIsValid ? 'SUCCEEDED' : 'FAILED'}</strong>)</code
	>
</p>
