import * as vscode from 'vscode';
import { getCommands } from './configuration';
import { showCommandsPick } from './pick';
import { getEnvironment } from './env';
import { run } from './terminal';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.runCommand', runCommand));
}

export function deactivate() { }

async function runCommand(uri: vscode.Uri | undefined) {
	const commands = getCommands();

	const pickedCommand = await showCommandsPick(commands);
	if (!pickedCommand) {
		return;
	}

	const env = getEnvironment(uri || getOpenFileUri());

	run(pickedCommand, env.cwd, env.resource);
}

function getOpenFileUri() {
	if (vscode.window.activeTextEditor) {
		return vscode.window.activeTextEditor.document.uri;
	}
}