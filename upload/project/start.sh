kubectl delete hpa short-hpa
kubectl delete -n kube-system deployments.apps metrics-server

kubectl delete service short-service
kubectl delete deployment short
kubectl delete cm short-config

kubectl delete service mongo-service
kubectl delete deployment mongo
kubectl delete secret mongo-secret

sleep 2

kubectl apply -f ./k8s/mongo_secret.yaml
kubectl apply -f ./k8s/mongo_deploy.yaml
kubectl apply -f ./k8s/mongo_service.yaml

sleep 3

kubectl apply -f ./k8s/short_config.yaml
kubectl apply -f ./k8s/short_deploy.yaml
kubectl apply -f ./k8s/short_service.yaml

sleep 5

kubectl apply -f ./k8s/metrics_server.yaml
kubectl apply -f k8s/short_hpa.yaml

kubectl port-forward service/short-service 8080