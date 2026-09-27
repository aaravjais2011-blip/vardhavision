<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep Vardha Vision as one anchored page with separate project "worlds" (Crown Town green, Sainik Vihar black/gold) until the client explicitly asks for separate URLs; keeps the cinematic gate-to-contact journey intact.
- Store supplied binary media as Lovable Assets pointer files so the repository stays lightweight while original media quality is retained.
