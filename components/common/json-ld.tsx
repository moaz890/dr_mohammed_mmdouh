import { jsonLdScript } from "@/lib/seo/json-ld";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(data)} />
  );
}
