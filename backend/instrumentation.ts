import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new NodeSDK({
    resource: resourceFromAttributes({
        'service-name': 'meu-backend-nest',
    }),
    traceExporter: new OTLPTraceExporter({
        url: 'http://localhost:4317/v1/traces',
    }),
    instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();