<!-- crevoai:start -->
# CrevoAI Rules

CrevoAI handles Playwright test automation (writing, adding, fixing, stabilizing, refactoring, running,
and auditing tests; scaffolding; CI). When the user asks for any of that, use the CrevoAI skill — call
`crevoai_workflow` first; its response carries the full phase-by-phase procedure. For general coding,
documentation, or questions, work directly — do not call CrevoAI tools.

Full conventions (selectors, code structure, codegen vs. direct edit, story traceability, secrets,
communication style) live in the CrevoAI skill — read it once engaged. This file only covers the
trigger condition above and the two rules below, which apply regardless of task.

- Read `.crevoai/rules.md` first if it exists — project-specific overrides there take precedence over
  everything else.
- Never delete or overwrite anything under the `.crevoai/` folder.

<!-- crevoai:end -->
