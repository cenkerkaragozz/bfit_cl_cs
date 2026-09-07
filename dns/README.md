# DNS-AID

`dns-aid.zone.example` is a repository-controlled zone-file fragment for DNS for AI Discovery (DNS-AID). It describes the HTTPS service that serves the public agent-discovery resources in this repository:

- `/.well-known/agent-description.json`
- `/.well-known/api-catalog`
- the homepage's `Accept: text/markdown` representation

The fragment is not an authoritative zone and is not published by this application. Public DNS is delegated to `ns1.natrohost.com` and `ns2.natrohost.com`; both `_index._agents.karsiyaka.brainfit.com.tr` and `_a2a._agents.karsiyaka.brainfit.com.tr` currently return `NXDOMAIN`. The repository contains no DNS provider credentials, zone configuration, or DNSSEC signing/delegation configuration, so this worktree cannot publish the record or truthfully claim DNS-AID/DNSSEC availability.

## Exact Natro zone entry

Add this record in the Natro authoritative zone for `brainfit.com.tr`:

```dns
_index._agents.karsiyaka.brainfit.com.tr. 3600 IN HTTPS 1 karsiyaka.brainfit.com.tr. alpn="h2" port=443 mandatory=alpn,port
```

In Natro's DNS panel, the equivalent fields are:

| Field | Value |
| --- | --- |
| Name / host | `_index._agents.karsiyaka` when editing the `brainfit.com.tr` zone; use the full FQDN if the panel requires it |
| Type | `HTTPS` |
| TTL | `3600` |
| Service mode / priority | `1` |
| Target | `karsiyaka.brainfit.com.tr.` |
| Parameters | `alpn="h2" port=443 mandatory=alpn,port` |

Do not add `_a2a._agents.karsiyaka.brainfit.com.tr.` yet. No A2A endpoint is deployed by this repository, so an `_a2a` record would make a capability claim the application cannot support.

## External steps still required

1. Add the exact HTTPS record above in the Natro zone that serves `karsiyaka.brainfit.com.tr`.
2. Ask Natro (or the authoritative DNS operator) to enable DNSSEC signing for `brainfit.com.tr` and provide the resulting DS values.
3. Publish that DS record at the registrar for `brainfit.com.tr`; the current parent zone has no DS record.
4. Verify the HTTPS record and its DNSSEC chain with a validating resolver and DNS-over-HTTPS before describing DNS-AID as published.

Until those provider and registrar actions are complete, the status is **repository artifact prepared; DNS-AID and DNSSEC not published**.
